import Route from '@ember/routing/route';

export default Route.extend({
		

  model(params) {
    return this.get('store').findRecord('monster', params.monster_id);
  },

	model(){
		return this.store.findAll('monster');



}



});
