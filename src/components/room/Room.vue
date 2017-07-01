<template>
  <div style='height:100%'>
    <roomhead/>
    <roomready ref='roomready' style='height: 100%'/>
  </div>
</template>
<script>
import RoomHead from './RoomHead'
import RoomReady from './RoomReady'
import SocketBean from '../../common/SocketBean'
export default {
  mounted(){
    let uobj = this.$route.query;
    let self = this;
    SocketBean.getSingleTon().init(uobj,self);
  },
  components:{
    roomhead:RoomHead,
    roomready:RoomReady
  }
}
</script>