<?php

    error_reporting(E_ALL ^ E_DEPRECATED);

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
		
		
		//Add Personal Details
		
		
		
		
		private function addPersonalDetails(){
		
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}
			
			
			$userName = '';
			$idGender = '';
			$mobileNumber = '';
			$profilePicPath = '';
			$userDob = '';
			$email = '';
			$idMaritalStatus = '';
			$height = '';
			$idEatingHabbits = '';
			$idMothertongue = '';
			$idDrinkingHabit = '';
			$idSmokingHabit = '';
			$physicalDisabilities = '';
			$aboutMe = '';
			$idReligion = '';
			$idCaste = '';
			$idSubCaste = '';
			$idGothra = '';
			$idNakshatra = '';
            $idRashi = '';
			$userId = '';
			


			
			if(isset($this->_request['UserName']))
			{
				$userName = $this->_request['Name'];
				$idGender = $this->_request['IdGender'];
				$mobileNumber = $this->_request['MobileNumber'];
				$profilePicPath = $this->_request['ProfilePicPath'];
				$userDob = $this->_request['DOB'];
				$email = $this->_request['Email'];
				$idMaritalStatus = $this->_request['IdMaritalStatus'];
				$height = $this->_request['Height'];
				$idEatingHabbits = $this->_request['IdEatingHabbits'];
				$idMothertongue = $this->_request['IdMothertongue'];
				$idDrinkingHabit = $this->_request['IdDrinkingHabit'];
				$idSmokingHabit = $this->_request['IdSmokingHabit'];
				$physicalDisabilities = $this->_request['PhysicalDisabilities'];
				$aboutMe = $this->_request['AboutMe'];
				$idReligion = $this->_request['IdReligion'];
				$idCaste = $this->_request['IdCaste'];
				$idSubCaste = $this->_request['IdSubCaste'];
				$idGothra = $this->_request['IdGothra'];
				$idNakshatra = $this->_request['IdNakshatra'];
				$idRashi = $this->_request['IdRashi'];
				$userId = '1';

			}
			
			
			$strSql = "Insert Into tblcandidatepersoneldetails(Name, IdGender, MobileNumber, ProfilePicPath, DOB, Email, IdMaritalStatus, Height, IdEatingHabit, IdMothertongue, IdDrinkingHabit, IdSmokingHabit, PhysicalDisabilities, AboutMe, IdReligion, IdCaste, IdSubCaste, IdGothra, IdNakshatra, IdRashi, userId)";
			$strSql = $strSql." Output Inserted.IdPersonalDetails Values('$userName', '$idGender', '$mobileNumber', '$profilePicPath', '$userDob', '$email', '$idMaritalStatus', '$height', '$idEatingHabbits', '$idMothertongue', '$idDrinkingHabit', '$idSmokingHabit', '$physicalDisabilities', '$aboutMe', '$idReligion', '$idCaste', '$idSubCaste', '$idGothra', '$idNakshatra', '$idRashi', '$userId')";
			
			mysql_query($strSql);
			
			$success = array('status' => "Success", "msg" => "Your Personal Account Created Successfully.");
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
	
		
		
		
		
		private function getGender(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblgender Order By IdGender";
			
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
		
		
		
		
		private function getMaritalStatus(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblmaritalstatus Order By IdMaritalStatus";
			
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
	
		
		
		
		private function getEatingHabit(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tbleatinghabit Order By IdEatingHabit";
			
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
	
	
	
	
		private function getDrinkingHabit(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tbldrinkinghabit Order By IdDrinkingHabit";
			
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
	
	
	
		private function getSmokingHabit(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblsmokinghabit Order By IdSmokingHabit";
			
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
		
		
		
		//family type
		
		private function getFamily(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblfamilytype Order By IdFamilyType";
			
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
	
		
		//getReligion
		
		
		private function getReligion(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblreligion Order By IdReligion";
			
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
		
		
		
		//getCaste
		
		
		
		private function getCaste(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$idReligion=$this->_request["idReligion"];
			
			$strSql = "SELECT * From tblcaste WHERE IdReligion = $idReligion Order By IdCaste;";

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
		
		
		
		private function getSubCaste(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
		    $idCaste=$this->_request["idCaste"];
			
			$strSql = "SELECT * From tblsubcaste WHERE IdCaste = $idCaste Order By IdSubCaste";
			
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
		

        
		
		private function getGotra(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblgothra Order By IdGothra";
			
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
		
		
		
		private function getMotherTongueType(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblmothertonguelanguages Order By IdLanguage";
			
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
		

		

         private function getNakshatra(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			
			
			$strSql = "SELECT * From tblnakshatra Order By IdNakshatra";
			
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
		
		
        
         private function getRashi(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$idNakshatra=$this->_request["idNakshatra"];

			
			$strSql = "SELECT * From tblrashi WHERE IdNakshatra = $idNakshatra Order By IdRashi";
			
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
		
		
		
		
         private function getQualification(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tbleducationalqualifications Order By IdQualification";
			
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
		
		
		
		
         private function getEmployment(){	
		
			// Cross validation if the request method is GET else it will return "Not Acceptable" status
			if($this->get_request_method() != "GET"){
				$this->response('',406);
			}
			
			$strSql = "SELECT * From tblemployementtypes Order By IdEmployement";
			
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