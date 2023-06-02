document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#page-container').style.display = 'none';

    document.querySelector('#nametag').addEventListener('click', ()=>{
        document.querySelector('#openpage').className = 'fade';
    document.querySelector('#openpage').addEventListener('animationend',()=>{

        document.querySelector('#page-container').style.display = 'block';
        document.querySelector('#page-container').className = 'fadein';
        document.querySelector('#openpage').style.display = 'none';

    })

    })

    document.querySelector('#sub-heading').addEventListener('animationend',()=>{
        const info = document.querySelectorAll("h4");
        
        statement(info, 0);
        
    })
    

    const div1Lists = document.querySelectorAll('#div1');
    console.log(div1Lists);
    for(let i = 1; i < div1Lists.length; i++){
        const lists = div1Lists[i].querySelectorAll('li');
        console.log(lists);
        for(let j = 0; j < lists.length; j++){
            lists[j].style.color = 'rgb(68, 65, 65)';
            window.addEventListener('scroll', ()=>{
                console.log('scroll');
                lists[j].style.color = 'white';
                lists[j].className = 'typed';
            })
    
        }
    }

    const div2Lists = document.querySelectorAll('#div2');
    console.log(div2Lists);
    for(let i = 1; i < div2Lists.length; i++){
        const lists = div2Lists[i].querySelectorAll('li');
        console.log(lists);
        for(let j = 0; j < lists.length; j++){
            lists[j].style.color = 'white';
            lists[j].addEventListener('mouseover', ()=>{
                lists[j].style.color = 'black';
                lists[j].className = 'typed';
            })
    
        }
    }

    function divLists1(array){
        for(let i = 1; i < array.length; i++){
            const lists = array[i].querySelectorAll('li');
            console.log(lists);
            for(let j = 0; j < lists.length; j++){
                lists[j].style.color = 'rgb(68, 65, 65)';
                lists[j].style.color = 'white';
                lists[j].className = 'typed';
            }
        }
    }

    function statement(array, i){
        if (i === (array.length)){
            return 0;
        }
        else{
            array[i].style.color = 'black';
            array[i].className = 'info typed';
            array[i].addEventListener('animationend', ()=>{
            array[i].className="";
            i++;
            statement(array, i);
        })
    }
}

});