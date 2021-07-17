class Book{
    constructor(Bookname,Author,Type)
    {
        this.name=Bookname;
        this.Author=Author;
        this.Type=Type;
    }
}
 var number=1;
function AddBook(){
     inputname=document.getElementById('inputEmail3').value;
     inputauthor=document.getElementById('inputPassword3').value;

    funny=document.getElementById('gridRadios1');
    horror=document.getElementById('gridRadios2');
    adventurous=document.getElementById('gridRadios3');
    let Type;

    if(funny.checked)
    {
       Type=funny.value;
    }
    else if(horror.checked)
    {
      Type=horror.value;
    }
    else
    {
      Type=adventurous.value;
    }
    
     AddTable=document.getElementById('tablebody');

     if(inputname=='' || inputauthor=='')
     {
       alert("You need to fill all the places")
     }
     else{
     let BookTotal=new Book(inputname,inputauthor);
     let Add=` 
     <tr>
       <td>${number}</td>
       <td>${BookTotal.name}</td>
       <td>${BookTotal.Author}</td>
       <td>${Type}</td>
     </tr>`
      AddTable.innerHTML+=Add;

     let navbar=document.querySelector('.navbar');
     navbar.nextElementSibling.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert" style="font-size:15px;">
      Your book  is successfully added in your library!
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
     setTimeout(()=>{
      navbar.nextElementSibling.innerHTML=`<h2 class="heading" style="text-align: center; text-decoration: underline; color: green; margin-top: 10px; " >Book Details</h2>`
      },4000);

     number++;
}
}


