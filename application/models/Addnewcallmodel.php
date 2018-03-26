<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Addnewcallmodel extends CI_Model {

	public function save_call($data)
	{

		$this->load->database();
		$i=0;$j=0;
		//var_dump($data);
		if(!empty($data['que'])){
			foreach ($data['que'] as $value) {
			 
				$this->db->set('question', $data['que'][$i]);
				$this->db->set('answer', $data['ans'][$i]);
				$this->db->insert('call');
				$i++;
			}
		}
		if(!empty($data['subque'])){
			foreach ($data['subque'] as $value) {
				$this->db->set('subquestion', $data['subque'][$j]);
				$this->db->set('answer', $data['subans'][$j]);
				$this->db->insert('calldetails');
				$j++;
			}
		}
		

		
	}

}
