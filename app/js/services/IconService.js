/**
 * Created by dooley on 5/31/17.
 */
angular.module('AgaveToGo').service('IconService', ['$rootScope', '$localStorage', 'MetaController', 'toastr',
    function ($rootScope, $localStorage, MetaController, toastr) {
        var serviceIcons = {
            system: 'fa-server',
            systems: 'fa-server',
            tag: 'fa-tags',
            tags: 'fa-tags',
            uuid: 'fa-barcode',
            uuids: 'fa-barcode',
            job: 'fa-rocket',
            jobs: 'fa-rocket',
            app: 'fa-code',
            apps: 'fa-code',
            file: 'fa-database',
            files: 'fa-database',
            data: 'fa-database',
            library: 'fa-book',
            libraries: 'fa-book',
            container: 'fa-book',
            containers: 'fa-book',
            maintenance: 'fa-calendar',
            profile: 'fa-user',
            profiles: 'fa-user',
            user: 'fa-user',
            users: 'fa-user',
            group: 'fa-users',
            groups: 'fa-users',
            meta: 'fa-pencil-square-o',
            metadata: 'fa-pencil-square-o',
            schema: 'fa-check-square-o',
            metaschema: 'fa-check-square-o',
            monitor: 'fa-television',
            monitors: 'fa-television',
            notification: 'fa-bell',
            notifications: 'fa-bell',
            preference: 'fa-cog',
            preferences: 'fa-cog',
            postit: 'fa-link',
            postits: 'fa-link',
            clients: 'fa-',
            role: 'fa-unlock-alt',
            roles: 'fa-unlock-alt',
            secret: 'fa-user-secret',
            secrets: 'fa-user-secret',
            permission: 'fa-unlock-alt',
            permissions: 'fa-unlock-alt',
            transfer: 'fa-exchange',
            transfers: 'fa-exchange',
            transform: 'fa-exchange',
            transforms: 'fa-exchange',
            terminal: 'fa-terminal',
            terminals: 'fa-terminal',
            jupyter: 'fa-tags',
            jupyterhub: 'fa-tags',
            notebook: 'fa-tags',
            notebooks: 'fa-tags',
            git: 'fa-git',
            gitlab: 'fa-git',
            github: 'fa-github',
            bitbucket: 'fa-bitbucket',
            amazon: 'fa-amazon',
            aws: 'fa-amazon',
            ec2: 'fa-amazon',
            docker: 'icon-docker',
            dockerhub: 'icon-docker',
            quay: 'fa-bitbucket',
            status: 'fa-bolt',
            statuses: 'fa-bolt',
            slack: 'fa-slack'
        };
        return {
            get: function (serviceName, defaultIcon) {
                return serviceIcons[serviceName] || defaultIcon;
            },
            getAll: serviceIcons
        };
    }]);