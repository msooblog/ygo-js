<style>
	
</style>

<template>
<card-search>
	<form id="searchTool" @submit.prevent="search">
		选择<select v-model="type" @change="record($event)('type')" >
			<option :value="$index" v-for="type in sort.type">{{type}}</option>
		</select>
		类型
		<select v-model="ssort[type]" @change="record($event)(ssortName[type])" >
			<option v-for="one in sort.sort[type]" :value="$index">{{one}}</option>
		</select>
		属性<select v-model="attr" @change="record($event)('attr')" :disabled="type !== 0">
			<option :value="$index" v-for="attr in sort.attr" >{{attr}}</option>
		</select>
		种族<select v-model="race" @change="record($event)('race')" :disabled="type !== 0">
			<option v-for="race in sort.race" :value="$index">{{race}}</option>
		</select>
		攻击力<input type="number" 
		:value="atk.min" 
		:disabled="type !== 0"
		@change="record($event)('atkMin')"
		>~<input type="number" 
		:value="atk.max" 
		:disabled="type !== 0"
		@change="record($event)('atkMax')"
		>
		防御力<input type="number" 
		:value="def.min" 
		:disabled="type !== 0"
		@change="record($event)('defMin')"
		>~<input type="number" 
		:value="def.max" 
		:disabled="type !== 0"
		@change="record($event)('defMax')"
		>
		<input type="submit" value="search">
	</form>
	<ul>
		<li v-for="card in atk">
			{{card}}
		</li>
	</ul>
</card-search>
</template>
<script type="babel">
import sort from './sort.js'
export default {
	data : ()=>{return {
		sort : sort
		,race : ~~localStorage.searchRecordRace || 0
		,type : ~~localStorage.searchRecordType || 0
		,attr : ~~localStorage.searchRecordAttr || 0
		,ssortName : {
			'0' : 'monster'
			,'1' : 'magic'
			,'2' : 'trap'
		}
		,ssort : {
			'0' : ~~localStorage.searchRecordMonster || 0
			,'1' : ~~localStorage.searchRecordMagic || 0
			,'2' : ~~localStorage.searchRecordTrap || 0
		}
		,atk : {
			min : ~~localStorage.searchRecordAtkMin || null
			,max : ~~localStorage.searchRecordAtkMax || null
		}
		,def : {
			min : ~~localStorage.searchRecordDefMin || null
			,max : ~~localStorage.searchRecordDefMax || null
		}
	}
	}
	,conputed : {
	}
	,methods : {
		search : function(e){
			console.log(e,this.race)
		}
		,record : e=>name=>localStorage[`searchRecord${name[0].toUpperCase()+name.slice(1)}`] = e.target.value
	}
}
</script>