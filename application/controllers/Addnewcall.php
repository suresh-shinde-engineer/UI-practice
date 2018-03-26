<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Addnewcall extends CI_Controller {
	 function __construct()
    {
        // this is  constructor
        parent::__construct();
        $this->load->model("addnewcallmodel");
        $this->load->helper('form');
        $this->load->helper('url');
    }

	public function index()
	{	$this->load->helper('url');
		$this->load->view('header');
		$this->load->view('addnewcall');
		$this->load->view('footer');
	}

	 public function save_que()
	{
		$this->addnewcallmodel->save_call($_POST);
		redirect('Addnewcall');
	}
}
