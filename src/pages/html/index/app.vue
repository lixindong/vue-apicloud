<template>
<div>
    <ul v-if="dataHasLoaded">
        <li>引擎版本信息: {{ver}}</li>
        <li>系统类型: {{sType}}</li>
        <li>系统版本: {{sVer}}</li>
        <li>设备标识: {{id}}</li>
        <li>设备型号: {{model}}</li>
        <li>设备名称: {{name}}</li>
        <li>网络状态: {{cType}}</li>
        <li>主窗口名字: {{winName}}</li>
        <li>主窗口宽度: {{winWidth}}</li>
        <li>主窗口高度: {{winHeight}}</li>
        <li>子窗口名字: {{frameName}}</li>
        <li>子窗口宽度: {{frameWidth}}</li>
        <li>子窗口高度: {{frameHeight}}</li>
        <li>引擎版本信息: {{ver}}</li>
        <li>系统类型: {{sType}}</li>
        <li>系统版本: {{sVer}}</li>
        <li>设备标识: {{id}}</li>
        <li>设备型号: {{model}}</li>
        <li>设备名称: {{name}}</li>
        <li>网络状态: {{cType}}</li>
        <li>主窗口名字: {{winName}}</li>
        <li>主窗口宽度: {{winWidth}}</li>
        <li>主窗口高度: {{winHeight}}</li>
        <li>子窗口名字: {{frameName}}</li>
        <li>子窗口宽度: {{frameWidth}}</li>
        <li>子窗口高度: {{frameHeight}}</li>

    </ul>
    <foot  v-bind:message="childMsg"></foot>
    <div>{{childMsg}}</div>
</div>
</template>

<script>
import foot from 'components/foot/foot';
export default {
    name: 'app',
    data() {
        return {
            dataHasLoaded: false,
            childMsg:'父组件'
        }
    },
    created() {
        this.ver = api.version;
        this.sType = api.systemType;
        this.sVer = api.systemVersion;
        this.id = api.deviceId;
        this.model = api.deviceModel;
        this.name = api.deviceName;
        this.cType = api.connectionType;
        this.winName = api.winName;
        this.winWidth = api.winWidth;
        this.winHeight = api.winHeight;
        this.frameName = api.frameName || '';
        this.frameWidth = api.frameWidth || '';
        this.frameHeight = api.frameHeight || '';
        this.dataHasLoaded = true;
    },
    components: {
        foot
    },
    mounted: function() {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>
