<template>
    <div class="inputField light" :class="{error: errors, focused}">
        <label v-if="label" :class="{ visible: showLabel }">{{label}}</label>
        <div class="selectFlex" :class="{ noItemSelected: !showLabel }">
            <select
                @input="updateInput_"
                @focus="focused = true"
                @blur="focused = false"
                v-focus="autofocus">
                <option value="" v-if="!showLabel" :selected="!showLabel">{{label}}</option>
                <option
                    v-for="option in options"
                    :selected="value === option.value"
                    :key="option.value"
                    :value="option.value">{{option.tName ? $t(option.tName) : option.name}}</option>
            </select>
            <IconDropdown />
        </div>

        <ul v-if="errors" class="error">
            <li v-for="error in errors" :key="error.message">{{error.messageT ? $t(error.messageT) : error.message}}</li>
        </ul>
    </div>
</template>

<script>
import IconDropdown from '@/assets/jw_icons/dropdown.svg?inline'

export default {
    name: 'InputSelect',
    components: { IconDropdown },
    data() {
        return {
            focused: false,
        }
    },
    props: {
        options: Array,
        value: String,
        label: String,
        errors: Array,
        autofocus: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        showLabel() {
            return this.value !== ''
        },
    },
    methods: {
        updateInput_: function(event) {
            const value = event.srcElement.value
            this.$emit('input', value)
        },
    },
}
</script>
