<template>
    <div class="inputField light" :class="{error: errors && errors.length > 0, disabled, focused}">
        <label :class="{ visible: showLabel }">{{label}}</label>
        <div v-if="type==='textarea'" class="itemRow">
            <textarea
                ref="textarea"
                class="dynamicInput itemRow-grow"
                rows="1"
                :value="value"
                :placeholder="label"
                v-focus="autofocus"
                :disabled="disabled"
                @focus="focused = true"
                @blur="focused = false"
                @input="updateInputArea"
            />
            <div ref="areaGrow"></div>
        </div>
        <input
            v-else
            :value="value"
            :autocomplete="autocomplete"
            :type="type"
            :disabled="disabled"
            :placeholder="label"
            v-focus="autofocus"
            @focus="focused = true"
            @blur="focused = false"
            @input="handleInput" />

        <ul v-if="errors && errors.length > 0" class="error">
            <li v-for="error in errors" :key="error.message">{{error.messageT ? $t(error.messageT) : error.message}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'InputField',
    data() {
        return {
            focused: false,
        }
    },
    props: {
        value: String,
        label: String,
        type: String,
        autocomplete: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        errors: Array,
    },
    mounted() {
        this.updateInputArea({ target: { value: this.value } })
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        updateInputArea: function(e) {
            this.$emit('input', e.target.value)
            if (!this.$refs.textarea) return

            this.$refs.areaGrow.style.height = this.$refs.textarea.style.height
            this.$refs.textarea.style.height = ''
            this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight+'px'
            this.$refs.areaGrow.style.height = ''
        },
    },
    computed: {
        showLabel() {
            return this.value && this.value.trim().length > 0
        },
    },
}
</script>
