var lists=document.getElementsByClassName('list')
var left=document.getElementById('left')
var right=document.getElementById('right')


for(list of lists){
    list.addEventListener('dragstart',function(e){
        var choose=e.target   
        left.addEventListener('dragover',function(e){
            e.preventDefault()
        })

        left.addEventListener('drop',function(){
            left.appendChild(choose)
            choose=null
        })

        right.addEventListener('dragover',function(e){
            e.preventDefault()
        })

        right.addEventListener('drop',function(){
            right.appendChild(choose)
            choose=null
        })  
      })
}
