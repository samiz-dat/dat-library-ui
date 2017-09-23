<template>
  <div>
    <h2 id="notifications">Notifications</h2>
    <lib-button @click="openTestAlert">alert</lib-button>
    <lib-button @click="openQuickAlert">quick</lib-button>
    <lib-button @click="openUserClickAlert">user has to click</lib-button>
  </div>
</template>

<script>
  export default {
    name: 'Notifications',
    created() {},
    data() {
      return {};
    },
    methods: {
      openTestAlert() {
        this.$alert({
          title: 'test notification',
          message: 'Sed, assumenda veniam nesciunt itaque quam recusandae quidem illo quod doloremque nobis debitis praesentium quo dolore ut facere ullam, saepe quibusdam dolor.',
        });
      },
      openQuickAlert() {
        this.$alert({
          title: 'quicker notification',
          message: 'You can set the time a notification is visiable for.',
          duration: 1000,
        });
      },
      openUserClickAlert() {
        this.$alert({
          title: 'User action required',
          message: 'You need to actively click this alert to make it disappear',
          duration: 0,
        });
      },
    },
  };
</script>
