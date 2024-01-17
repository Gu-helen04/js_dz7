
const progress = document.getElementById( 'progress' );

const form = document.getElementById('form')        
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange',(e) => {
        let check = 0
        xhr.upload.onprogress = function(event) {
            progress.value = event.loaded/event.total
            
          }
        
          xhr.onload = xhr.onerror = function() {
            if (this.status == 201) {
                alert("Загрузка завершена");
            } else {
                alert("ERROR:  " + this.status);
            }
          };
    })

    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload')
    const formData = new FormData(form)

    xhr.send(formData)
})