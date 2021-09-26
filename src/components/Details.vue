<template>
  <div>
    <table class="table table-borderless table-sm">
      <tbody>
        <tr>
          <th colspan="2">Class Details</th>
        </tr>
        <tr>
          <td class="fw-light">Day</td>
          <td class="text-capitalize">{{ this.classdata.day }}</td>
        </tr>
        <tr>
          <td class="fw-light">Time</td>
          <td>
            {{ moment(this.classdata.start).format("h:mmA") }} -
            {{ moment(this.classdata.end).format("h:mmA") }}
          </td>
        </tr>
        <tr>
          <td class="fw-light">Instructor</td>
          <td>
            {{ this.classdata.instructor ? this.classdata.instructor : "n/a" }}
          </td>
        </tr>
        <tr>
          <td class="fw-light">Location</td>
          <td>
            {{ this.classdata.location ? this.classdata.location : "n/a" }}
          </td>
        </tr>
        <tr>
          <td class="fw-light">Clothing</td>
          <td>
            {{ this.classdata.clothing ? this.classdata.clothing : "n/a" }}
          </td>
        </tr>
        <tr>
          <td class="fw-light">Hair</td>
          <td>{{ this.classdata.hair ? this.classdata.hair : "n/a" }}</td>
        </tr>
        <tr>
          <td class="fw-light">Equipment</td>
          <td>
            {{ this.classdata.equipment ? this.classdata.equipment : "n/a" }}
          </td>
        </tr>
      </tbody>
      <tbody v-if="this.classdata.type == 'choreo'">
        <tr>
          <th colspan="2" class="pt-4">Competition &amp; Routine</th>
        </tr>
        <tr
          v-for="(key, value, index) in this.classdata.routine[0]"
          :key="index"
        >
          <td class="text-capitalize fw-light">{{ value }}</td>
          <td>{{ key }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Details",
  props: ["classdata"],
  created: function () {
    this.moment = moment;
  },
};
</script>
