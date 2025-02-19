
document.querySelectorAll('.img').forEach(img=>{
    img.addEventListener('click', () =>{
        document.querySelectorAll('.img.active').forEach(activeImg=>
            activeImg.classList.remove('active')
        )
        img.classList.add('active')
    })
})