if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', addhandlers)
} else {
    addhandlers()
    change_quantity()
}
function add_cmd(){
    var link_post = document.getElementsByClassName('link_post')
    for(var i=0; i<link_post.length ;i++){
        var btn_cmd_line= link_post[i]
        btn_cmd_line.addEventListener('click',addCmdLine)
}
}
function update_total()
{

    l=document.getElementsByClassName('prt')
    s=0
    for(i=0; i<l.length;i++){
    s=s+parseInt(l[i].innerText)
    }
    if (s==0)
    {document.getElementById('tot').innerText=""}
    else
    {document.getElementById('tot').innerText=s+ " TND"}
}
function change_quantity()
{
    var input_quantities= document.getElementsByClassName('p_input')
    for(var i=0; i<input_quantities.length ;i++){
        var input_number = input_quantities[i]
        input_number.addEventListener('change', update_quantity)
        
    }
   
}
function update_quantity()
{
    var input_num = event.target
    var unit_price =input_num.parentElement.getElementsByClassName('pr')[0].innerText
    var quantity=input_num.value
    tot=unit_price*quantity
    input_num.parentElement.getElementsByClassName('prt')[0].innerText=tot
    update_total()
}
function removelinecmd()
{
    var removeButton = document.getElementsByClassName('del')
for(var i=0; i<removeButton.length ;i++){
    var button = removeButton[i]
    button.addEventListener('click',removeline)
}
}
function removeline ()
{
btn=event.target
btn.parentElement.parentElement.parentElement.parentElement.remove()
update_total()
x=document.getElementsByClassName('p_title').length
update_item(x)
}
function addhandlers(){
    add_cmd()
    change_quantity()
    removelinecmd()
    }

    function create_line(name,price,image){
        var div = document.createElement('footer')
    div.innerText = name
    var Name_line_purchased = document.getElementsByClassName('p_title')
    var exist = false
    for(var i=0;i<Name_line_purchased.length;i++){
        if(Name_line_purchased[i].innerText == name){
           
            exist = true
            break
        }
    }
 if(exist==true)
 {
    alert(`The" ${name}  "is already purshased`)
 }
 else{
    var line_cmd=`
   <div class="one_third">
   <div class="widget_container">
   <div class="flickr_widget">
   <img src="${image}" alt="img"/>
   </div>
   <h3 class="p_title">${name}</h3>
   </div>
   </div>
   <div class="one_third">
   <div class="widget_container">
   <input type="number" value="1" class="p_input" min="1">
   <p class="p_txt">x <span class="pr">${price}</span> TND = </p>
   <p class="p1_txt"><span class="prt">${price}</span> TND</p>   
   </div>
   </div>
   <div class="one_third_last">
   <div class="widget_container">   
   <div class="read_more"><a href="#" class="del">Delete</a></div>   
   </div>
   </div>`
   div.innerHTML=line_cmd
   document.getElementById("menu").appendChild(div)
   div.getElementsByClassName('p_input')[0].addEventListener('change', change_quantity)
   div.getElementsByClassName('del')[0].addEventListener('click', removeline)
   
   update_total()
  // document.getElementsByTagName('footer')[0].innerHTML=line_cmd
  var y= Name_line_purchased.length
  update_item(y)
  
}

    }

    function update_item(x)
{
    if ((x>0)&&(x+1<10))
  
  {
   document.getElementById("nbr_item").innerText= "0"+x}
  else if(x+1>=10)
  {document.getElementById("nbr_item").innerText= x+1}
  else if(x==0){document.getElementById("nbr_item").innerText= ""}
}
function addCmdLine(event){
    var btn_cmd_line = event.target
    var item_selected=btn_cmd_line.parentElement.parentElement.parentElement.parentElement
    var name = item_selected.getElementsByTagName('h2')[0].innerText
    var price = item_selected.getElementsByClassName('pr')[0].innerText
    var image = item_selected.getElementsByTagName('img')[0].src
    create_line(name,price,image)
    
   }