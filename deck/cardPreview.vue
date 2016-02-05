//card previw
<style>
	card , card *{
		padding: 0;
		margin: 0;
		border: 0 none;
	}
	card{
		display: block;
		width: 290px;
		height: 100%;
	}
	card>img{
		display: block;
		margin: 0 auto;
	}
	card>h2{
		
	}
	card>h2 span.attr{
		float: right;
	}
	card>.star{
		text-align: right;
	}
	card>.star.xyz{
		text-align: left;
	}
	card>ul{
		list-style: none;
	}
	card>ul.des::before{
		content: attr(title)':';
		display: block;
	}
	card>ul.Pdes::before{
		content: attr(title)':';
		display: block;
	}
</style>

<template>
	<card class="card" >
		<img alt="{{card.name}}" v-bind:src="card.img">
		<h2>{{card.name}} <span class="attr">{{attr[card.attr]}}</span></h2>
		<div class="star" :class="{xyz : card.sort === 5}">{{{star}}}</div>
		<div class="bar" v-if = "card.type === 0 ">
			<span class="sort">{{sort[card.type][card.sort]}}怪兽</span>
			<span class="star">星数:{{ card.star }}</span>
			<span class="Pscale" v-if="card.sort === 5 ">刻度: {{ card.Pscale1 }}|{{ card.Pscale2 }}</span>
			<br/>
			<span class="atk">ATK:{{card.atk}}</span>
			<span class="def">DEF:{{card.def}}</span>
		</div>
		<ul title="效果" class="bar des">
			<li v-for="des in card.des">{{des}}</li>
		</ul>
		<ul title="灵摆效果" class="bar P" v-if = {{ card.type === 0 && card.sort === 5 }}>
			<li v-for="des in card.Pdes">{{des}}</li>
		</ul>
	</card>	
</template>

<script type="babel">
import sort from './sort'
import shy from 'shynome'
export default {
	data : ()=>shy.update(sort,{})
	,props : {
		card : {
			default : ()=>{return {
				name : "黑魔术师"
				,img : 'http://p.ocgsoft.cn/143.jpg'
				,attr : 2
				,type : 0
				,sort : 0
				,Pscale1 : 0
				,Pscale2 : 0
				,race : 18
				,star : 7
				,atk : 2500
				,def : 2100
				,des : ["只要此卡在场上,持有者便享受游戏的幸运光环"]
				,tags : ['游戏']
			}}
			,type : 'object'
		}
	}
	,computed : {
		star : s=>{
			let str = ''
			for(let i=0;i<s.card.star;i++){str+='<i class="material-icons">star</i>'}
			return str
		}
	}
}
</script>