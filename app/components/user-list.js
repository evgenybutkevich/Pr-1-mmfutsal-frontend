import Component from '@glimmer/component';

export default class UserListComponent extends Component {
    constructor(owner, args) {
        super(owner, args);
        this.sortedUsers = args.users.sortBy('id');
    }
}