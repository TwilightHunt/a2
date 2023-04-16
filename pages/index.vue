<template>
  <div>
    <!-- <component :is="popup ?? 'LoginBox'" /> -->
    <Settings />
  </div>
</template>

<script setup>
import usePopups from "../composables/usePopups.js";
import Settings from "./Settings.vue";

const { popup } = usePopups();
</script>

<script>
import LoginBox from "../components/popups/auth/LoginBox.vue";
import RegisterBox from "../components/popups/auth/RegisterBox.vue";

export default {
  components: {
    LoginBox,
    RegisterBox,
  },
};
</script>
