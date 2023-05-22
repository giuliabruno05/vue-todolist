

const {createApp} = Vue ;

createApp({
    data(){
        return{
            item :[
                {
                    text:"fare i compiti",
                    done:true
                },
                {
                    text:"andare in vacanza",
                    done:false
                },
                {
                    text:"andare in palestra",
                    done:true
                },
                {
                    text:"meditare",
                    done:false
                }

                
            ],
            itemText : "" 
            
            
        }
    },
    methods: {
        addTask (){
            const  newTask = {
                text:this.itemText,
                done:false
            } 
            if(newTask.text !== ""){
                this.item.unshift(newTask)
            }    
            this.itemText = "" 
        },
        rimuoviTask(indice){
            this.item.splice(indice, 1)
            
         },
         viceversa(indice){
            if(this.item[indice].done === true){
                this.item[indice].done = false
            }else {
                this.item[indice].done = true
            }
         }
    }
}) .mount("#app")