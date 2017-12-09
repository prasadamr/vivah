<?php
    header("Access-Control-Allow-Origin: *");
	
	require_once("Rest.inc.php");
	
	class API extends REST {
	
		public $data = "";
		
		const DB_SERVER = "localhost";
		const DB_USER = "root";
		const DB_PASSWORD = "";
		const DB = "dbvivaah";
		
		private $db = NULL;
	
		public function __construct(){
			parent::__construct();				// Init parent contructor
			$this->dbConnect();					// Initiate Database connection
		}
		
		/*
		 *  Database connection 
		*/
		private function dbConnect(){
			$this->db = mysql_connect(self::DB_SERVER,self::DB_USER,self::DB_PASSWORD);
			if($this->db)
				mysql_select_db(self::DB,$this->db); 
			//mysql_connect("localhost", "root", "");
			//mysql_select_db("dbems")
		}
		
		/*
		 * Public method for access api.
		 * This method dynmically call the method based on the query string
		 *
		 */
		public function processApi(){
			$func = strtolower(trim(str_replace("/","",$_REQUEST['action'])));
			if((int)method_exists($this,$func) > 0)
				$this->$func();
			else
				$this->response('',404);				// If the method not exist with in this class, response would be "Page not found".
		}
		
		/* 
		 *	Simple login API
		 *  Login must be POST method
		 *  email : <USER EMAIL>
		 *  pwd : <USER PASSWORD>
		 */
		
		private function addSignUpUser(){
		
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}
			
			
			$userName = '';
			$userEmail = '';
			$userPhone = '';
			$userPwd = '';
			$userDob = '';
			$userGender = '';
			
			if(isset($this->_request['UserName']))
			{
				$userName = $this->_request['UserName'];
				$userEmail = $this->_request['UserEmail'];
				$userPhone = $this->_request['UserPhone'];
				$userPwd = $this->_request['UserPwd'];
				$userDob = $this->_request['UserDob'];
				$userGender = $this->_request['UserGender'];
			}
			
			$strSql = "Insert Into tbluseraccount(userName, userEmail, userPhone, userPwd, userDob, userGender) ";
			$strSql = $strSql." Values('$userName', '$userEmail', '$userPhone', '$userPwd', '$userDob', '$userGender')";
			
			mysql_query($strSql);
			
			$success = array('status' => "Success", "msg" => "Your Account Created Successfully.");
			$this->response($this->json($success),200);
			
			// If invalid inputs "Bad Request" status message and reason
			$error = array('status' => "Failed", "msg" => "Invalid Parameters / Input");
			$this->response($this->json($error), 400);
		}
		
		
		
		private function getSignUpUser(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tbluseraccount Order By userId";
			
			$sql = mysql_query($strSql, $this->db);
		
			if(mysql_num_rows($sql) > 0){
				$result = array();
				while($rlt = mysql_fetch_array($sql,MYSQL_ASSOC)){
					$result[] = $rlt;
				}
				
				// If success everythig is good send header as "OK" and return list of users in JSON format
				$this->response($this->json($result), 200);
			}
			
			$this->response('',204);	// If no records "No Content" status
		}
	
		
		
		
		
		/*
		 *	Encode array into JSON
		*/
		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		}
	}
	
	// Initiiate Library
	$api = new API;
	$api->processApi();
?>