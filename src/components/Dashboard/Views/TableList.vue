<template>
  <div>
  <TopNavbar></TopNavbar>

  <div class="content">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <nav class="navbar navbar-expand-lg navbar-right">
                  <div class="collapse navbar-collapse justify-content-end">
                    <form>
                      <fieldset>
                      <input type="search" placeholder="Search"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </fieldset>
                    </form>
                    <ul class="navbar-nav ml-auto">
                      <span>Currency</span>
                      <drop-down tag="li">
                        <template slot="title">BTC</template>
                        <a class="dropdown-item" href="#">BTC</a>
                        <a class="dropdown-item" href="#">USD</a>
                      </drop-down>
                      <span>View</span>
                      <drop-down tag="li">
                        <template slot="title">TOP 100 LIST</template>
                        <a class="dropdown-item" href="#">TOP 100</a>
                        <a class="dropdown-item" href="#">ALL</a>
                      </drop-down>
                    </ul>
                  </div>
              </nav>

              <template>
              <input id="tab1" type="radio" name="tabs" checked>
              <label for="tab1">ALL</label>
              <input id="tab2" type="radio" name="tabs">
              <label for="tab2">COINS</label>
              <input id="tab3" type="radio" name="tabs">
              <label for="tab3">TOKENS</label>
                <section id="content1">
                  <div class="table-responsive">
                    <l-table class="table-hover table-striped"
                             :columns="table1.columns"
                             :data="table1.data">
                    </l-table>
                  </div>
                </section>
                <section id="content2">
                  <div class="table-responsive">
                    <l-table class="table-hover table-striped"
                             :columns="table2.columns"
                             :data="table2.data">
                    </l-table>
                  </div>
                </section>
                <section id="content3">
                  <div class="table-responsive">
                    <l-table class="table-hover table-striped"
                             :columns="table3.columns"
                             :data="table3.data">
                    </l-table>
                  </div>
                </section>
              </template>
            </template>
          </card>
        </div>
      </div>
    </div>
    <ContentFooter></ContentFooter>
    </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import TopNavbar from 'src/components/Dashboard/Layout/TopNavbar.vue'
  import ContentFooter from 'src/components/Dashboard/Layout/ContentFooter.vue'
  import DashboardContent from 'src/components/Dashboard/Layout/Content.vue'
  const tableColumns = ['Currency', 'Price', 'Change24h', 'MarketCap', 'Signal'];
  const tableData = [
    {
      currency: 'Ethereum (ETH)',
      price: '0.09689320 BTC',
      change24h: '0.00%',
      marketcap: '71,301,716,692 USD / 0.9%',
      signal: 'Neutral',
      logo: "static/img/crypto_logos/eth.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
  },
    {
      currency: 'Bitcoin Cash (BCH)',
      price: '0.18213800 BTC',
      change24h: '-3.36%',
      marketcap: '42,243,509,094 USD / 0.54%',
      signal: 'Buy',
      logo: "./static/img/crypto_logos/bch.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Bitcoin (BTC)',
      price: '1.00000000 BTC',
      change24h: '0.00%',
      marketcap: '230,838,626,359 USD / 01%',
      signal: 'Strought buy',
      logo: "./static/img/crypto_logos/btc.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Ripple (XRP)',
      price: '0.00013422 BTC',
      change24h: '2.95%',
      marketcap: '128,875,903,264 USD / 1%',
      signal: 'Strought buy',
      logo: "./static/img/crypto_logos/xrp.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Cardano (BCH)',
      price: '0.18213800 BTC',
      change24h: '3.36%',
      marketcap: '71,301,716,692 USD / 0.9%',
      signal: 'Neutral',
      logo: "./static/img/crypto_logos/cardano.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'NEO (XRP)',
      price: '0.00013422 BTC',
      change24h: '-2.95%',
      marketcap: '42,243,509,094 USD / 0.54%',
      signal: 'Sell',
      logo: "./static/img/crypto_logos/neo.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'EOS (EOS)',
      price: '0.09689320 BTC',
      change24h: '1.17%',
      marketcap: '230,838,626,359 USD / 01%',
      signal: 'Strought sell',
      logo: "./static/img/crypto_logos/eos.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Litecoin (LTC)',
      price: '0.18213800 BTC',
      change24h: '3.36%',
      marketcap: '128,875,903,264 USD / 1%',
      signal: 'Strought sell',
      logo: "./static/img/crypto_logos/ltc.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'NEM (NEM)',
      price: '0.09689320 BTC',
      change24h: '-1.17%',
      marketcap: '71,301,716,692 USD / 0.9%',
      signal: 'Sell',
      logo: "./static/img/crypto_logos/nem.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'IOTA (IOT)',
      price: '0.18213800 BTC',
      change24h: '-3.36%',
      marketcap: '42,243,509,094 USD / 0.54%',
      signal: 'Neutral',
      logo: "./static/img/crypto_logos/iot.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Dash (DSC)',
      price: '0.09689320 BTC',
      change24h: '-1.17%',
      marketcap: '230,838,626,359 USD / 01%',
      signal: 'Strought sell',
      logo: "./static/img/crypto_logos/dsc.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Monero (MNR)',
      price: '0.18213800 BTC',
      change24h: '-3.36%',
      marketcap: '128,875,903,264 USD / 1%',
      signal: 'Strought sell',
      logo: "./static/img/crypto_logos/mnr.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'VeChain (VEN)',
      price: '0.09689320 BTC',
      change24h: '-1.17%',
      marketcap: '71,301,716,692 USD / 0.9%',
      signal: 'Sell',
      logo: "./static/img/crypto_logos/ven.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'VeChain (VEN)',
      price: '0.09689320 BTC',
      change24h: '-1.17%',
      marketcap: '71,301,716,692 USD / 0.9%',
      signal: 'Sell',
      logo: "./static/img/crypto_logos/ven.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Ethereum Classic (BCH)',
      price: '0.18213800 BTC',
      change24h: '-3.36%',
      marketcap: '42,243,509,094 USD / 0.54%',
      signal: 'Neutral',
      logo: "./static/img/crypto_logos/ethc.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'VeChain (VEN)',
      price: '0.09689320 BTC',
      change24h: '-1.17%',
      marketcap: '71,301,716,692 USD / 0.9%',
      signal: 'Sell',
      logo: "./static/img/crypto_logos/ven.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
    {
      currency: 'Ethereum Classic (BCH)',
      price: '0.18213800 BTC',
      change24h: '-3.36%',
      marketcap: '42,243,509,094 USD / 0.54%',
      signal: 'Neutral',
      logo: "./static/img/crypto_logos/ethc.png",
      neutral: "static/img/crypto_logos/n_icon.png",
      buy: "static/img/crypto_logos/b_icon.png",
      sell: "static/img/crypto_logos/s_icon.png",
      up: "static/img/arrowUp.png",
      down: "static/img/arrowDown.png"
    },
  ];
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table3: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style scoped>

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    min-width: 320px;
    max-width: 800px;
    padding: 50px;
    margin: 0 auto;
    background: #fff;
  }

  section {
    font-family: "PT Mono";
    display: none;
  }

  span{
    font-family: "PT Sans";
    color: #757575;
    font-size: 14px;
    margin-top: 4px;
  }

  input[type="radio"]{
    display: none;
  }

  label {
    display: inline-block;
    margin: 0 0 -1px;
    padding: 15px 25px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #bbb;
    border: 1px solid transparent;
  }

  label:before {
    font-family: fontawesome;
    font-weight: normal;
    margin-right: 10px;
  }

  label:hover {
    color: #888;
    cursor: pointer;
  }

  input:checked + label {
    font-family: "PT Sans";
    color: #1b2021;
    border-bottom: 2px solid #1b2021;
  }

  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4 {
    display: block;
  }

  @media screen and (max-width: 650px) {
    label {
      font-size: 0;
    }
    label:before {
      margin: 0;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    label {
      padding: 15px;
    }
  }

  .navbar-right{
    float: right;
    width: 57%;
  }

  fieldset {
    position: relative;
    display: inline-block;
    padding: 0 0 0 40px;
    background: #fff;
    border: none;
    border-radius: 5px;
  }

  input,
  button {
    position: relative;
    width: 200px;
    height: 50px;
    padding: 0;
    display: inline-block;
  }

  input {
    color: #1b2021;
    z-index: 2;
    border: 0 none;
    font-weight: 400;
    font-size: 18px;
    font-family: "PT Sans";
  }

  button {
    z-index: 1;
    width: 0;
    border: 0 none;
    background: #ceb980;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    -webkit-transform: translate(-50px, 0);
    -ms-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }

  .fa-search {
    font-size: 18px;
    color: #1b2021;
    z-index: 3;
    top: 25%;
    -webkit-transform: translate(-190px, 0);
    -ms-transform: translate(-190px, 0);
    transform: translate(-190px, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
</style>
