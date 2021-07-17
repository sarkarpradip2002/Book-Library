class Book{
    constructor(Bookname,Author,Type)
    {
        this.name=Bookname;
        this.Author=Author;
        this.Type=Type;
    }
}

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
     
     let BookTotal=new Book(inputname,inputauthor);
    let Add=` 
    <tr>
      <th scope="row"></th>
      <td>${BookTotal.name}</td>
      <td>${BookTotal.Author}</td>
      <td>${Type}</td>
    </tr>`

    AddTable.innerHTML+=Add;
     
}

