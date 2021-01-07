<template>
    <div>
        <d-player :options="options"
                @play="play"
                ref="player">
        </d-player>
    </div>
</template>

<script>
  import VueDPlayer from 'vue-dplayer'
  import 'vue-dplayer/dist/vue-dplayer.css'

  export default {
    data() {
      return {
        options: {
          video: {
            // url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
            // pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
            quality: [
                {
                    name: 'HD',
                    url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
                    type: 'normal',
                },
                {
                    name: 'SD',
                    url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                    type: 'normal',
                },
            ],
            defaultQuality: 0,
          },
          autoplay: false
        },
        player: null,
        }
    },
    mounted() {
      this.player = this.$refs.player.dp
    },
    methods: {
      play() {
        console.log('play callback')
      },
      switchHandle() {
        this.player.switchVideo({
          url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
        })
      }
    },
    components: {
      'd-player': VueDPlayer
    }
  }
</script>

<style>
    .dplayer-menu{
        display: none !important;
    }
</style>
