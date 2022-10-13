let items =['3 Litre Su İç','Ödevleri Yap','En Az 3 Saat Kodlama Yap','Yemek Yap','50 Sayfa Kitap Oku'];

let list=document.querySelector('#mylist');

items.forEach(function(item){
   CreateItem(item);

});


list.addEventListener('click',function(item){
    
    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked')
        ToogleDeleteButton();
    }
    
});
document.querySelector('#deleteAll').onclick=function(){
    let elements =document.querySelectorAll('.checked');
    elements.forEach(function(item){
        item.style.display='none';
        item.classList.remove('checked');
    });
}
function ToogleDeleteButton(){
    let checkList=document.querySelectorAll('.checked');

    if(checkList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none');

    }else{

        document.querySelector('#deleteAll').classList.add('d-none');

    }
}

document.querySelector('#btnCreate').onclick=function(){

    let item=document.querySelector('#txtItem').value;
    if(item===''){
        alert('Lütfen Bir Değer Girin');
        return;
    }
    CreateItem(item);

};

function CreateItem(item){
    let li = document.createElement('li');
    let t=document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);

    list.appendChild(li);
    let span= document.createElement('span');
    let text=document.createTextNode('x');
    span.className="close";
    span.appendChild(text);
    li.appendChild(span);
    span.onclick=function(){
        let li =this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
    }

}