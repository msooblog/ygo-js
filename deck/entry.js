'use strict'
import $ from 'jquery'
import Vue from 'vue'
//import socket from 'socket-client'
import ComponentCardPreview from './cardPreview.vue'
import ComponentCardSearch from './cardSearch.vue'

$(()=>{
	let cardPreview = new Vue({
		el : "body"
		,data : {
			card : {
				name : "黑魔术师"
				,race : ""
			}
		}
		,components : {
			"card-preview" : ComponentCardPreview
			,"card-search" : ComponentCardSearch
		}
	})
})
