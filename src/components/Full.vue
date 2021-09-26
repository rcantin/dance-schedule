<template>
  <div>
    <table class="table table-borderless table-hover" v-if="data">
      <tbody v-for="(day, indexa) in data" :key="indexa" class="border-top">
        <tr>
          <th colspan="2" class="text-capitalize pt-3">{{ day.day }}</th>
        </tr>
        <tr v-for="(item, indexb) in day.classes" :key="indexb">
          <td>{{ item.name }}</td>
          <td class="text-nowrap">
            {{ moment(item.start).format("h:mmA") }} -
            {{ moment(item.end).format("h:mmA") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Full",
};
</script>
