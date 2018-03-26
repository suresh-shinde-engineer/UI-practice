<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div class="container">
	
	<div class="row">
		<div class="col-sm-12">
			<div class="col-md-8 offset-md-2 form-outer">

			
			<header>
				<nav class="nav">
				  <a class="nav-link active" href="#">ADD NEW CALL</a>
				  
				</nav>
			</header>
			<form name="add_que_form" id="add_que_form" method="POST" action="addnewcall/save_que">
				<div class="work-space" id="myspace">
					<div id="dynamic_que">
						
					</div>	  
					 
				 </div>
				 	<div class="input-group foot-add-que">
				 	 	<div class="col-sm-8"></div>
					  <div class="col-sm-4 " style="text-align: right;">
					    <button type="button" class="btn btn-light btnpad" id="newque">+ ADD NEW QUESTION</button>
					  </div>
					</div>
					 <footer>
					 <div class="input-group ">
						<button type="submit" id="submit" class="btn btn-info btnpad">SAVE</button>  <button type="button" class="btn btn-light btnpad" id="cancel">Cancel</button>
					 </div>
					</footer>
			</form>
		</div>
		</div>
	</div>
	
</div>