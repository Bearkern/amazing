<template>
  <div class="bg-gray-100 h-screen">
    <div class="container">
      <h1 class="text-primary text-center text-h1 mb-4 pt-[80px] md:text-[80px] md:drop-shadow-3xl">Clients</h1>
      <select name="customType" id="customType" class="w-full md:hidden text-primary font-bold px-6 py-2.5 mb-6">
        <option selected>選擇客戶類型</option>
        <option value="consumer-spending">民生消費</option>
        <option value="food">食品餐飲</option>
        <option value="entertainment">娛樂休閒</option>
      </select>

      <div class="hidden md:flex justify-between space-x-[1px] mb-5">
        <button class="w-1/3 py-4.5 bg-primary text-white hover:bg-primary-darken hover:text-white font-bold py-2 px-4">
          民生消費
        </button>
        <button class="w-1/3 py-4.5 bg-white text-primary hover:bg-primary-darken hover:text-white font-bold py-2 px-4">
          食品餐飲
        </button>
        <button class="w-1/3 py-4.5 bg-white text-primary hover:bg-primary-darken hover:text-white font-bold py-2 px-4">
          娛樂休閒
        </button>
      </div>

      <div class="hidden md:flex justify-end gap-4 mb-5">
        <a href="#" class="h-[50px] w-[50px] flex justify-center items-center bg-white"><img src="../assets/images/left-arrow.png" alt="left-arrow"></a>
        <a href="#" class="h-[50px] w-[50px] flex justify-center items-center bg-white"><img src="../assets/images/right-arrow.png" alt="right-arrow"></a>
      </div>

      <ul class="grid grid-cols-3 md:grid-cols-5 gap-8 lg:gap-y-[52px] lg:gap-x-[84px] mb-10">
        <li><img src="../assets/images/logo1-md.png" alt="台灣啤酒" class="object-cover"></li>
        <li><img src="../assets/images/logo2-md.png" alt="JURA" class="object-cover"></li>
        <li><img src="../assets/images/logo3-md.png" alt="TAMNAVULIN" class="object-cover"></li>
        <li><img src="../assets/images/logo4-md.png" alt="COINTREAU" class="object-cover"></li>
        <li><img src="../assets/images/logo5-md.png" alt="REMY MARTIN" class="object-cover"></li>
        <li><img src="../assets/images/logo6-md.png" alt="賀木堂" class="object-cover"></li>
        <li class="hidden md:block"><img src="../assets/images/logo7-md.png" alt="AGORA" class="object-cover"></li>
        <li class="hidden md:block"><img src="../assets/images/logo1-md.png" alt="台灣啤酒" class="object-cover"></li>
        <li class="hidden md:block"><img src="../assets/images/logo7-md.png" alt="AGORA" class="object-cover"></li>
        <li class="hidden md:block"><img src="../assets/images/logo5-md.png" alt="REMY MARTIN" class="object-cover"></li>
      </ul>

      <div class="flex justify-center gap-2.5 md:hidden">
        <a href="#">
          <div class="rounded-full w-2 h-2 bg-primary"></div>
        </a>
        <a href="#">
          <div class="rounded-full w-2 h-2 bg-gray-200"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'IndexView'
}
</script>
