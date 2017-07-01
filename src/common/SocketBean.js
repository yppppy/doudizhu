
export default class SocketBean { 
  static getSingleTon() { 
    if (!SocketBean.instance) { 
      SocketBean.instance = new SocketBean(); 
    } 
    return SocketBean.instance; 
  }
  constructor() { 
      
  }
  init(uobj,self){
    this.pomelo = window.pomelo;
      let host = "127.0.0.1";
      let port = "3010";

        this.pomelo.init({
          host: host,
          port: port,
          log: true
        }, ()=>{
          //pomelo.disconnect(); //关闭连接

        this.pomelo.notify('connector.roomHandler.enterRoom',uobj);
        // pomelo.request("connector.entryHandler.entry", {uid:3,uname:'zhangsan'}, function(data) {
        //     alert(data.name);
        //   });
        this.pomelo.on('enterRoom', function(seat){
            // alert(seat);
             console.log(seat);
              for(let i=0;i<3;i++){
                  // alert("eeee");
                self.$refs.roomready.setSeat(i,'');//有错
              }
              for(let key in seat){
               // alert("fffff");
                self.$refs.roomready.setSeat(key,seat[key].nicheng);
              }
              
            });
          //-----------------------------------------
        this.pomelo.on('fullRoom', function(data){
              alert('客满');
               closeConnect();
              self.$router.push('/hill');
            });
          //------------被动离开------------------
        this.pomelo.on('leave', function(data){
              alert(data);
              self.$router.push('/hill');
            });
        });
        
  }
  closeConnect(){
    this.pomelo.disconnect();
  }
} 