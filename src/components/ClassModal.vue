<template>
  <div>
    <div>{{ test }}</div>
    <div
      class="modal fade"
      id="modalClassDetail"
      tabindex="-1"
      aria-hidden="true"
      v-if="classdetail"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ classdetail.name }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="">
              <table class="table table-borderless table-sm">
                <tbody>
                  <tr>
                    <th colspan="2">Class Details</th>
                  </tr>
                  <tr>
                    <td class="fw-light">Day</td>
                    <td class="text-capitalize">{{ classdetail.day }}</td>
                  </tr>
                  <tr>
                    <td class="fw-light">Time</td>
                    <td>
                      {{ moment(classdetail.start).format("h:mmA") }} -
                      {{ moment(classdetail.end).format("h:mmA") }}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-light">Instructor</td>
                    <td>
                      {{
                        classdetail.instructor ? classdetail.instructor : "n/a"
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-light">Clothing</td>
                    <td>
                      {{ classdetail.clothing ? classdetail.clothing : "n/a" }}
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-light">Hair</td>
                    <td>{{ classdetail.hair ? classdetail.hair : "n/a" }}</td>
                  </tr>
                  <tr>
                    <td class="fw-light">Equipment</td>
                    <td>
                      {{
                        classdetail.equipment ? classdetail.equipment : "n/a"
                      }}
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="classdetail.routine">
                  <tr>
                    <th colspan="2" class="pt-4">Routine Details</th>
                  </tr>
                  <tr
                    v-for="(key, value, index) in classdetail.routine[0]"
                    :key="index"
                  >
                    <td class="text-capitalize fw-light">{{ value }}</td>
                    <td>{{ key }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Done"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Modal } from "../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  name: "ClassModal",
  data() {
    return {
      test: "testing",
    };
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="modal"]')
    ).forEach((modalNode) => new Modal(modalNode));
  },
};
</script>
