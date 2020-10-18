const sendForm =()=>{
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    forms(document.getElementById('form1'));
    forms(document.getElementById('form2'));
    forms(document.getElementById('form3'));

    const statusMessage = document.createElement('div');
    
   
    
    statusMessage.style.cssText='font-size: 2rem; color: white;';

    function forms(item){ 

        let inputsArr = [...item.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button'; 
        });

        //Валидация инпутов
        inputsArr.forEach((item)=>{
            item.addEventListener('input',()=>{
                
                if(item.name === 'user_phone' ){

                    item.value=item.value.replace(/[^0-9\+]/, '');

                }else if(item.name === 'user_name'){

                    item.value=item.value.replace(/[^а-яё ]/gi,'');

                }else if(item.name === 'user_message'){

                    item.value=item.value.replace(/[^а-яё0-9.,;:!?@#/$№\-)(=`<>|}{}\+\]["'_*&^ ]/gi,'');

                }
                else if(item.name === 'user_email'){

                    item.value=item.value.replace(/[^a-z0-9\.@\.\_]/gi,'');

                }
            });
        });


        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.append(statusMessage);
    
            statusMessage.textContent = loadMessage;

            const formData = new FormData(item);
            let body = {};
           
            formData.forEach((val,key)=>{
                body[key]=val;
            });

            postData(body)
            .then((response)=>{
                if(response.status !==200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch(error =>{
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    //Сброс инпутов
            inputsArr.forEach((item)=>{
                item.value='';
            });
    });
    }

    const postData = (body) => {

       return fetch('./server.php',{
           method: 'POST',
           headers:{
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(body)
       }); 
    };

};
export default sendForm;