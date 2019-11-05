<template>
    <section>
      <Nav/>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,k) in GetMainPageEntrie" :key="k">
                    <img :src="v.ImgUrl" :alt="v.ShowName">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
       
    </section>
</template>
<script>
  import Nav from '../../common/Nav'
export default {
    components:{Nav},
    data () {
        return{
            data:'',
            mySwiper:{},
            GetAllCategorie:[],
            GetMainPageEntrie:[]
        }
    },
    mounted () {
        this.mySwiper = new Swiper('.swiper-container', {
            pagination:{
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: true,//可选选项，自动滑动
            
        })
        
        this.GetMainPageEntries();
         this.GetAllCategories();
    },
    methods:{
          GetAllCategories () {
            let postData = this.$api.md5({
                ReqTime:new Date().getTime(),
                Nonce:'66666666666sdf',
                Signature:'',
                TerminalType:'5555',
                TerminalVersion:'3333'
            })
            this.$api.post({
                url:'api/Mall/GetAllCategories',
                data:postData
            }).then(res=>{
                console.log(res.data.Data)
                this.GetAllCategorie = res.data.Data;
            })
        },
        GetMainPageEntries () {
            let postData = this.$api.md5({
                EntryType:1,
                ReqTime:new Date().getTime(),
                Nonce:'66666666666sdf',
                Signature:'',
                TerminalType:'5555',
                TerminalVersion:'3333'
            })
            this.$api.post({
                url:'api/Mall/GetMainPageEntries',
                data:postData
            }).then(res=>{
                // console.log(res)
                this.GetMainPageEntrie = res.data.Data;
            })
        }
    }
}
</script>
<style lang="scss" scoped>
 .clearfix1::after{
        display:block;
        clear:both;
        content:"";
    }
     .clearfix1::after{
        zoom:1;
    }
    * {
    font-family: 'microsoft yahei','Tahoma', 'Arial', 'simsong';
}
.li_xuanze{
    line-height:24px;
}
 ol , ul ,p, body ,a,li{
        list-style:none;
        margin:0;
        padding:0;
    }
    .alllist1{
         cursor:pointer;
    }
.alllist{
    position:relative;
    z-index:2;
}
.alllist:hover .allmask_list{
    display:block;
}
.allmask_list{
    width:720px;
    display:none;
    position:absolute;
    top:40px;
    left:0;
    z-index:9999;
    background:white;
    padding:20px 20px 0;
    box-shadow: 0 3px 5px rgba(0,0,0,.8);
}
.li_xuanze{
    cursor:pointer;
    color:#888;
}
.li_xuanze:hover{
     color:#333;
}
.allmask_list .list_box{
    margin-right:10px;
}
.list_box{
    height:120px;
    width:230px;
     margin-right:10px;
    float:left;
     padding-bottom:20px;
     li{
         width:100%;
     }
}
 .list_box_right{
    width:170px;
    float:left;
    height:120px;
    li{
        width:85px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        height:120px;
        box-sizing:border-box;
        color:#999;
        font-size:13px;
        float:left;
        text-align:left;
        padding-left:10px;
        box-sizing:border-box;
    }
}
@media screen and (min-width: 1200px ){
   .allmask_list{
    width:1200px;
    display:none;
    position:absolute;
    top:40px;
    left:0;
    z-index:9999;
    background:white;
  padding:20px 20px 0;
   }
   .list_box{
    height:120px;
    margin-right:10px;
    width:290px;
    float:left;
     padding-bottom:20px;
     li{
         width:100%;
     }
      .list_box_right{
    width:230px;
    float:left;
    height:120px;
    li{
        width:115px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        height:120px;
        color:#999;
        font-size:12px;
        float:left;
        text-align:left;
        padding-left:10px;
        box-sizing:border-box;
    }
}
}
}
.list_box_left{
    width:60px;
    float:left;
    box-sizing:border-box;
    height:120px;
    padding-top:10px;
    padding-left:10px;
     padding-right:10px;
    border-right:1px solid #eee;
    img{
        width:100%;
        height:50px;
    }
    p{
        text-align:center;
        font-size:12px;
            color: #333;
            line-height:20px;
    }

}
.allmask_list li{
    margin:0;
}

   section{
        .ul{
            @media screen and (min-width: 1200px ){
                width: 1200px;
            }
            @media screen and (max-width: 1200px ){
                width: 100%;
                min-width: 700px;
            }
            margin: 20px auto 0;
            // line-height: 40px;
            .li{
                 line-height: 40px;
                margin: 20px auto 0;
                width: 120px;
                text-align: center;
                margin: 0 20px;
                font-size: 16px;
            }
            li.active{
                background-color: #FFC125;
                color: #fff;
                font-weight: bold;
            }
        }
        .swiper-container{
            height: 500px;
            width: 100%;
            background: url('../../../../assets/img/banner.jpg') 0 0 /cover no-repeat;
        }
        .swiper-slide{
            img{
                display: block;
                width: 100%;
                height: 100%;
                background: url('../../../../assets/img/banner.jpg') 0 0 /cover no-repeat;
            }
        }
    }
   
</style>
