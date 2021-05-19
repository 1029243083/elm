<template>
  <div class="my-wrapper">
    <div class="my-info">
      <div class="img-box">
        <img src="../../assets/tx.png" alt="" />
      </div>
      <div class="info-box">
        <div class="login">登录/注册</div>
        <div class="phone">
          <van-icon
            name="phone-circle-o"
            size="0.8rem"
            class="phone-icon"
          />暂无手机号
        </div>
      </div>
      <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="center-wrapper">
      <div class="balance">
        <div class="balance-num">0.00</div>
        <div class="balance-text">我的余额</div>
      </div>
      <div class="discount">
        <div class="discount-num">0</div>
        <div class="discount-text">我的优惠</div>
      </div>
      <div class="integral">
        <div class="integral-num">0</div>
        <div class="integral-text">我的积分</div>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="list-item">
        <div class="list-item-img-box">
          <img src="../../assets/dingdan.png" alt="" />
        </div>
        <div class="list-item-text">我的订单</div>
      </div>
      <div class="list-item">
        <div class="list-item-img-box">
          <img src="../../assets/shangcheng.png" alt="" />
        </div>
        <div class="list-item-text">积分商城</div>
      </div>
      <div class="list-item">
        <div class="list-item-img-box">
          <img src="../../assets/huiyuan.png" alt="" />
        </div>
        <div class="list-item-text">我的会员卡</div>
      </div>
    </div>
    <div class="service-list">
      <div class="service-item">
        <div class="service-item-img-box">
          <img src="../../assets/fuwu.png" alt="" />
        </div>
        <div class="service-item-text">服务</div>
      </div>
      <div class="service-item">
        <div class="service-item-img-box">
          <img src="../../assets/elm_png.png" alt="" />
        </div>
        <div class="service-item-text">下载饿了么</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped lang='less'>
.my-wrapper {
  background-color: #fff;
  .my-info {
    position: relative;
    padding: 0 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.01rem solid rgba(238, 238, 238, 0.5);
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    .img-box {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 0.01rem solid #eee;
      padding: 0.3rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info-box {
      padding-left: 0.8rem;
      .login {
        font-size: 1.4rem;
        font-weight: bold;
      }
      .phone {
        display: flex;
        align-items: center;
        padding-top: 0.6rem;
        font-size: 0.8rem;
        .phone-icon {
          padding-right: 0.3rem;
        }
      }
    }
    .right-icon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .center-wrapper {
    display: flex;
    .balance,
    .discount,
    .integral {
      flex: 1;
      padding: 2rem 0;
      text-align: center;
      border-left: 0.01rem solid rgba(238, 238, 238, 0.5);
      border-right: 0.01rem solid rgba(238, 238, 238, 0.5);
      border-bottom: 0.01rem solid rgba(238, 238, 238, 0.5);
      .balance-num {
        color: rgb(238, 186, 44);
        font-size: 1.6rem;
        font-weight: bold;
      }
      .balance-text {
        color: #555;
      }
      .discount-num {
        color: rgb(238, 44, 44);
        font-size: 1.6rem;
        font-weight: bold;
      }
      .discount-text {
        color: #555;
      }
      .integral-num {
        color: rgb(44, 238, 141);
        font-size: 1.6rem;
        font-weight: bold;
      }
      .integral-text {
        color: #555;
      }
    }
  }
  .list-wrapper,
  .service-list {
    border-top: 1rem solid rgba(212, 212, 212, 0.329);
    .list-item,
    .service-item {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.6rem;
      border-bottom: 0.01rem solid rgba(219, 219, 219, 0.349);
      .list-item-img-box,
      .service-item-img-box {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .list-item-text,
      .service-item-text {
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
}
</style>