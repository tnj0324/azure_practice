<template>
 <div>
      <div>
        <n-link to="table" class="button--grey">砂場1</n-link>
        <h2 id="card_detail_title">
          {{item.printed_name}}<br>
          <small>{{item.name}}</small>
        </h2>
      </div>
      <div class="buy_and_cell_buttons">
        <a href="#">
          <button class="buy_button">
            <div class="price"><span class="yen">¥ </span>550</div>
            <div class="letter">で購入</div>
            <div class="notion">or 指値で買取する</div>
          </button>
        </a>
        <a href="#">
          <button  class="cell_button">
            <div class="price"><span class="yen">¥ </span>478</div>
            <div class="letter">で売却</div>
            <div class="notion">or 指値で販売する</div>
          </button>
        </a>
      </div>
      <div class="card_panel">
        <img :src="item.image_uris.small" class="panel">
      </div>
      <div id="card_detail_slider">
        <a href="#">
          <div class="active">
           ディスクリプション
          </div>
        </a>
        <a href="#">
          <div>
            価格推移
          </div>
        </a>
      </div>
    <div class="card_detail">
        <table border="1">
          <tbody>
            <tr>
              <td>
                <h3>{{item.printed_name}} / {{item.name}}</h3>
              </td>
            </tr>
            <tr>
              <td>
                {{item.printed_type_line}}
              </td>
            </tr>
            <tr>
              <td style="white-space: pre-line">
                <p>{{item.printed_text}}</p>
              </td>
            </tr>
            <tr>
              <td>
                {{item.loyalty}}
              </td>
            </tr>
            <tr>
              <td>Illustrated by Scott Murphy</td>
            </tr>
          </tbody>
        </table>
    </div>
 </div>     
</template>


<script>
export default {
    async asyncData ({ $axios }) {
        const { data } = await $axios.get(`https://api.scryfall.com/cards/dom/1/ja`)

        return { 
            item: data,
        }
        console.log(item)          
      }
}
</script>