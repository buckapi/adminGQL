
 interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [

    {name: 'global', src: './assets/assetsdash/vendor/global/global.min.js'},
    {name: 'select', src: './assets/assetsdash/vendor/bootstrap-select/dist/js/bootstrap-select.min.js'},
    {name: 'dataTables', src: './assets/assetsdash/vendor/datatables/js/jquery.dataTables.min.js'},
    {name: 'bundle', src: './assets/assetsdash/vendor/chart.js/Chart.bundle.min.js'},
    {name: 'peity', src: './assets/assetsdash/vendor/peity/jquery.peity.min.js'},
    {name: 'datatablesIni', src: './assets/assetsdash/js/plugins-init/datatables.init.js'},
    {name: 'custom', src: './assets/assetsdash/js/custom.min.js'},
    {name: 'wallet', src: './assets/assetsdash/js/dashboard/my-wallet.js'},
    {name: 'apex', src: './assets/assetsdash/vendor/apexchart/apexchart.js'},
    {name: 'deznav', src: './assets/assetsdash/js/deznav-init.js'},
    {name: 'demo', src: './assets/assetsdash/js/demo.js'}
];