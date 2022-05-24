import Vue from 'vue'
import AuthGuard from './auth-guard'
import Router from 'vue-router'
import Parallax from 'vue-parallaxy'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import CreateWarehouse from '@/components/Warehouse/AddWarehouse.vue'
import EditWarehouse from '@/components/Warehouse/EditWarehouse.vue'
import IndexWarehouse from '@/components/Warehouse/WarehouseList.vue'
import ViewingWarehouse from '@/components/Warehouse/WarehouseViewing.vue'
import CreateProduct from '@/components/Product/AddProduct.vue'
import EditProduct from '@/components/Product/EditProduct.vue'
import IndexProduct from '@/components/Product/ProductList.vue'
import ProductViewing from '@/components/Product/ProductViewing.vue'
import CreateSupplier from '@/components/Supplier/AddSupplier.vue'
import EditSupplier from '@/components/Supplier/EditSupplier.vue'
import IndexSupplier from '@/components/Supplier/SupplierList.vue'
import SupplierViewing from '@/components/Supplier/SupplierViewing.vue'
import CreateReviews from '@/components/User/AddReviews.vue'
import EditReviews from '@/components/User/EditReviews.vue'
import IndexReviews from '@/components/User/ReviewsList.vue'
import ReviewsViewing from '@/components/User/ReviewsViewing.vue'
// import ReportTitle from '@/components/Report/ReportTitle.vue'
// import ReportClient from '@/components/Report/ReportClient.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: "",
            name: "home",
            component: Home
        },
        {
            path: "/discipline/:id",
            props: true,
            name: "ad",
            component: Ad,
            beforeEnter: AuthGuard
        },
        {
            path: "/list",
            name: "list",
            component: AdList,
            beforeEnter: AuthGuard
        },
        {
            path: "/new",
            name: "newAd",
            component: NewAd,
            beforeEnter: AuthGuard
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/registration",
            name: "reg",
            component: Registration
        },
        //=============================================================================================================
        //WAREHOUSE
        {
            name: 'CreateWarehouse',
            path: '/createwarehouse',
            component: CreateWarehouse,
            beforeEnter: AuthGuard
        },
        {
            name: 'EditWarehouse',
            path: '/editwarehouse/:id',
            component: EditWarehouse,
            beforeEnter: AuthGuard
        },
        {
            name: 'IndexWarehouse',
            path: '/warehouse',
            component: IndexWarehouse,
            beforeEnter: AuthGuard
        },
        {
            name: 'ViewingWarehouse',
            path: '/warehouseviewing',
            component: ViewingWarehouse,
            beforeEnter: AuthGuard
        },
        //==============================================================================================================
        //PRODUCT
        {
            name: 'CreateProduct',
            path: '/createproduct',
            component: CreateProduct,
            beforeEnter: AuthGuard
        },
        {
            name: 'EditProduct',
            path: '/editproduct/:id',
            component: EditProduct,
            beforeEnter: AuthGuard
        },
        {
            name: 'IndexProduct',
            path: '/product',
            component: IndexProduct,
            beforeEnter: AuthGuard
        },
        {
            name: 'ProductViewing',
            path: '/product-viewing',
            component: ProductViewing,
            beforeEnter: AuthGuard
        },
        //==============================================================================================================
        //SUPPLIER
        {
            name: 'CreateSupplier',
            path: '/createsupplier',
            component: CreateSupplier,
            // beforeEnter: AuthGuard
        },
        {
            name: 'EditSupplier',
            path: '/editsupplier/:id',
            component: EditSupplier,
            // beforeEnter: AuthGuard
        },
        {
            name: 'IndexSupplier',
            path: '/supplier',
            component: IndexSupplier,
            // beforeEnter: AuthGuard
        },
        {
            name: 'SupplierViewing',
            path: '/supplier-viewing',
            component: SupplierViewing,
            // beforeEnter: AuthGuard
        },
        //==============================================================================================================
        //REVIEWS
        {
            name: 'CreateReviews',
            path: '/createreviews',
            component: CreateReviews,
            beforeEnter: AuthGuard
        },
        {
            name: 'EditReviews',
            path: '/editreviews/:id',
            component: EditReviews,
            beforeEnter: AuthGuard
        },
        {
            name: 'IndexReviews',
            path: '/reviews',
            component: IndexReviews,
            beforeEnter: AuthGuard
        },
        {
            name: 'ReviewsViewing',
            path: '/reviews-viewing',
            component: ReviewsViewing,
            beforeEnter: AuthGuard
        },
        //==============================================================================================================
        // Report
        // 	{
        // 		name: 'ReportTitle',
        // 		path: '/report',
        // 		component: ReportTitle,
        // 		beforeEnter: AuthGuard
        // 	},
        // 	{
        // 		name: 'ReportClient',
        // 		path: '/report-client',
        // 		component: ReportClient,
        // 		beforeEnter: AuthGuard
        // 	},
        //=============================================================================================================
    ],
    components: {
        Parallax
    },
    mode: 'history'
})