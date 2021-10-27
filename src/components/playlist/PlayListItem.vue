<template>
    <div class="song">
        <div class="song__info">
            <span class="song__info--length">{{song.length}}</span>
            <span class="song__info--spacer">|</span> 
            <span class="song__info--artist">{{song.artist}}</span>
            <router-link to="/song">
                <p class="song__info--title" @click="setPlayingSong(song)">
                    {{song.title}}
                </p>
            </router-link>
        </div>
        <div class="song__buttons">
            <div class="song__button">
                <ButtonShare :haveBg="false" />
            </div>
            <div class="song__button">
                <ButtonFavourite :haveBg="false" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonFavourite from '@/components/buttons/ButtonFavourite'
import ButtonShare from '@/components/buttons/ButtonShare'

export default {
    name:'PlayListItem',
    props:{
        song: Object
    },
    components:{
        ButtonFavourite,
        ButtonShare
    },
    methods: mapActions('player', [
        'setPlayingSong'
    ]),
}
</script>

<style lang="scss" scoped>
    .song{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $border-gray;
        padding: 25px 0;
        width: 100%;
        &:first-child{
            padding-top: 0px;
        }
        &__info{
            &--title{
                font-weight: 700;
                color: $font-purple;
                font-size: 16px;
                margin-top: 5px;
            }
            &--length,
            &--artist,
            &--spacer{
                font-size: 12px;
                color: $font-gray;
            }
            &--spacer{
                margin: 0 5px;
            }
        }

        &__buttons{
            display: flex;
        }
        &__button{
            display: flex;
            margin-left: 15px;
        }
    }
</style>

