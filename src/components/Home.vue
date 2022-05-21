<template>
	<div>
	<v-container grid-list-lg>
		<v-layout row wrap>
		<v-flex
			xs12
			sm6
			md4
			v-for="ad of ads"
			:key="ad.id">
			<v-card>
				<v-img
					:src="ad.logoSrc"
					height="200px"
				>
				</v-img>
				<v-card-title primary-title>
					<div>
					<h3 class="headline mb-0">{{ad.fullName}}</h3>
					<hr style="color: black">
					<div>{{ad.description}}</div>
					</div>
				</v-card-title>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn 
					style="background-color: white; border: 3px solid #000000; box-sizing: border-box; border-radius: 27px; padding: 3%"
					text :to="'/ad/' + ad.id">Читать</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
		</v-layout>
	</v-container>
	</div>
</template>  
<script>
export default {
	data() {
		return {
			ads: []
		}
	},
	computed: {
		promoAds () {
			return this.$store.getters.promoAds
		}
	},
	created() {
		this.$store.dispatch('getDiscipline')
		.then (() => {
			console.log("myLog")
			console.log(this.$store.getters.discipline)
			this.ads = this.$store.getters.discipline
		})
	}
}
</script>
  
<style scoped>
	.car-link {
		position: absolute;
		bottom: 50px;
		left: 50%;
		background: rgba(0, 0, 0, 0.5);
		transform: translate(-50%, 0);
		padding: 5px 15px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}
</style>