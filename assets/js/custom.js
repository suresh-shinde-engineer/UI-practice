$(document).ready(function(){ 
       // $('#myspace').css('display','none'); 
       var i=1;
       $('button#newque').click(function(){ 
         $('#dynamic_que').append('<div class="input-group"> <span style="line-height:30px;">'+i+' &nbsp;&nbsp;</span><input type="text" class="form-control" placeholder="How do you feel today?" name="que[]" aria-label="Text input with dropdown button"><div class="input-group-append"> <select class="custom-select rmborder select_que_type" id="'+i+'" ><option value="Multiline" selected> 🇦 Multiline Text</option><option value="Single"> 🇦 Single Choice</option><option value="Multiple"> 🇦 Multiple Choice</option> </select></div></div><div id="selected'+i+'" class="input-group"><div class="input-group old'+i+'"><span style="font-size: 24px;line-height:30px;">&rarr;</span><textarea class="col-sm-6 form-control"  name="ans[]" rows="1" placeholder="No" aria-describedby="basic-addon2" required=""></textarea></div> </div>');  
         $('.work-space').css('height','auto');
        i++;
      });
       var j=1;
      $(document).on('click','.input-group-text',function() {
        var id=$(this).attr("id");
        var select_id=id.substring(9);
        $('#selected'+select_id).append('<div class="input-group"><span style="line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp; q'+j+' &nbsp;&nbsp;</span><input type="text" class="form-control" placeholder="How do you feel today?" name="subque[]" aria-label="Text input with dropdown button"><div class="input-group-append"> <select class="custom-select rmborder select_sub_que_type" id="'+i+j+'" ><option value="Multiline" selected> 🇦 Multiline Text</option><option value="Single"> 🇦 Single Choice</option><option value="Multiple"> 🇦 Multiple Choice</option> </select></div></div><div id="selected'+i+j+'" class="input-group"><div class="input-group old'+i+j+'">Ans <span style="font-size: 24px;line-height:30px;">&rarr;</span><textarea class="col-sm-6 form-control"  name="subans[]" rows="1" placeholder="No" aria-describedby="basic-addon2" required=""></textarea></div> </div>');
        j++;
      });
       $(document).on('change', 'select.select_que_type', function(){ 
          var select_id=$(this).attr("id"); 
          var quetype=$(this).find(":selected").val();  
          $('.old'+select_id).remove();
          if(quetype=='Multiline'){
          $('#selected'+select_id).append('<div class="input-group old'+select_id+'"><span style="font-size: 24px;line-height:30px;">&rarr;</span><textarea class="col-sm-6 form-control"  name="ans[]" rows="1" placeholder="No" aria-describedby="basic-addon2" required=""></textarea></div>');
          }
          if(quetype=='Multiple'){
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="ans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="ans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="ans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="ans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="ans[]" class="form-control" placeholder="No" ><div class="input-group-append"> <span class="input-group-text" id="addsubque'+select_id+'">+ Add Sub Question</span></div></div>');
          }
          if(quetype=='Single'){
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="ans[]" class="form-control" placeholder="No" ><div class="input-group-append"> <span class="input-group-text" id="addsubque'+select_id+'">+ Add Sub Question</span></div></div>');
          }
       });

        $(document).on('change', 'select.select_sub_que_type', function(){ 
          var select_id=$(this).attr("id"); 
          var quetype=$(this).find(":selected").val();  
          $('.old'+select_id).remove();

          if(quetype=='Multiline'){
          $('#selected'+select_id).append('<div class="input-group old'+select_id+'">Ans<span style="font-size: 24px;line-height:30px;">&rarr;</span><textarea class="col-sm-6 form-control"  name="subans[]" rows="1" placeholder="No" aria-describedby="basic-addon2" required=""></textarea></div>');
          }
          if(quetype=='Multiple'){
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;">Ans <span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="subans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;">Ans <span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="subans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;">Ans <span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="subans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;">Ans <span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="subans[]" class="form-control" placeholder="No" ></div>');
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'"><span style="line-height:30px;">Ans <span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="subans[]" class="form-control" placeholder="No" ><div class="input-group-append"> <span class="input-group-text" id="addsubque'+select_id+'">+ Add Sub Question</span></div></div>');
          }
          if(quetype=='Single'){
            $('#selected'+select_id).append('<div  class="input-group old'+select_id+'">Ans<span style="line-height:30px;"><span style="font-size: 24px;">&rarr;</span></span><input class="col-sm-6 form-control" type="text" name="subans[]" class="form-control" placeholder="No" ><div class="input-group-append"> <span class="input-group-text" id="addsubque'+select_id+'">+ Add Sub Question</span></div></div>');
          }
       });

       $(document).on('click', 'button#cancel', function(){  
          $("#add_que_form")[0].reset();
      }); 
      /* $('#submit').click(function(){   

           jQuery.ajax({  
                method:"POST",  
                url:"save_que",  
                data:$('#add_que_form').serialize(),  
                success:function(data)  
                {  
                     alert(data);  
                     $('#add_que_form')[0].reset();  
                }  
           });  
      }); */
     
 });  

