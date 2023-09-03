<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/clear-cachebb', function() {
    Artisan::call('cache:clear');
    return "Cache is cleared";
});

Route::get('/',  [
    'as' => 'home.show',
    'uses' => 'HomeController@show'
]);


Route::auth();

Route::group(['namespace' => 'Admin'], function() {
    Route::post('admin/ordersstatus/updateOrderStates', [
        'as' => 'admin.ordersstatus.updateOrderStates',
        'uses' => 'OrdersStatusController@updateOrderStates'
    ]);

    /** categories **/
    Route::get('ct/{cat_name?}',  [
        'as' => 'category.show',
        'uses' => 'CategoriesController@show'
    ]);
    /** collection **/
    Route::get('cl/{col_name?}',  [
        'as' => 'collection.show',
        'uses' => 'CollectionsController@show'
    ]);
    /** Opportunities **/
    Route::get('opportunities/{opp_name?}',  [
        'as' => 'opportunities.show',
        'uses' => 'OpportunitiesController@show'
    ]);
    
    
    /** news **/
    // Route::get('news/{n_name?}',  [
    //     'as' => 'news.show',
    //     'uses' => 'NewsController@show'
    // ]);
    
        Route::get('news/opening{n_name?}',  [
        'as' => 'news.show',
        'uses' => 'NewsController@show'
    ]);
    
    /** shopping_center **/
    Route::get('shopping_center',  [
        'as' => 'shopping_center.show',
        'uses' => 'ShoppingCenterController@show'
    ]);

    /** shopping_center **/
    Route::get('abs/{en_name?}',  [
        'as' => 'abs.menu.show',
        'uses' => 'AboutUsMenusController@show'
    ]);

    /**** ORDERS *****/
    Route::post('orders/review', [
        'as' => 'orders.review',
        'uses' => 'OrdersController@review'
    ]);
    Route::post('orders/select_options', [
        'as' => 'orders.select_options',
        'uses' => 'OrdersController@select_options'
    ]);
    Route::post('orders/set_options', [
        'as' => 'orders.set_options',
        'uses' => 'OrdersController@set_options'
    ]);
    Route::post('orders/addToCart', [
        'as' => 'orders.addToCart',
        'uses' => 'OrdersController@addToCart'
    ]);
    Route::get('cart', [
        'as' => 'orders.cart',
        'uses' => 'OrdersController@cart'
    ]);

    Route::get('orders/auth', [
        'as' => 'orders.auth',
        'uses' => 'OrdersController@auth'
    ]);
    Route::get('orders/select_address', [
        'as' => 'orders.select_address',
        'uses' => 'OrdersController@select_address'
    ]);
    Route::post('orders/set_address', [
        'as' => 'orders.set_address',
        'uses' => 'OrdersController@set_address'
    ]);
    Route::get('orders/checkout', [
        'as' => 'orders.checkout',
        'uses' => 'OrdersController@checkout'
    ]);
    Route::post('orders/submit', [
        'as' => 'orders.submit',
        'uses' => 'OrdersController@submit'
    ]);



    Route::post('settings/save', [
        'as' => 'admin.settings.save',
        'uses' => 'EmploymentFormController@saveSettings'
    ]);



    /**** handle menus ****/

    Route::get('cms_m/{id}', [
        'as' => 'manageMenu',
        'uses' => 'CmsMenuItemsController@menuHandler'
    ])->where('menu', '([A-Za-z0-9\-\/]+)');





    Route::get('admin/survey-form-adm/', [
        'as' => 'admin.survey_form.show',
        'uses' => 'Survey_Manager\Survey_ManagerController@index_show'
    ]);


    Route::post('admin/survey-form-filter-pr/', [
        'as' => 'admin.survey_form.filter_pr',
        'uses' => 'Survey_Manager\Survey_ManagerController@filter_pr'
    ]);


});


Route::get('ebook/', [
    'as' => 'homebook.show',
    'uses' => 'Admin\HomebookController@show'
]);

Route::get('ebook/in/{intro}', [
    'as' => 'homebook.showIntro',
    'uses' => 'Admin\HomebookController@showIntro'
]);

Route::get('ebook/{name}', [
    'as' => 'homebook.showByName',
    'uses' => 'Admin\HomebookController@showByName'
]);


Route::get('search/', [
    'as' => 'search.show',
    'uses' => 'SearchController@search'
]);


Route::get('employment-form/', [
    'as' => 'employment.show',
    'uses' => 'Admin\EmploymentFormController@create'
]);


Route::post('employment-form/', [
    'as' => 'employment.store',
    'uses' => 'Admin\EmploymentFormController@store'
]);

Route::get('static/content/{en_name}', [
    'as' => 'static.content',
    'uses' => 'ToolsController@staticContent'
]);



Route::get('survey-form/', [
    'as' => 'survey_form.show',
    'uses' => 'Fronts\Survey\Survey_formController@index_show'
]);


Route::post('survey-form-pr/', [
    'as' => 'survey_form.survey_form_pr',
    'uses' => 'Fronts\Survey\Survey_formController@survey_form_pr'
]);








Route::group(['middleware' => 'auth'], function () {
    Route::get('user/profile',  [
        'as' => 'user.profile',
        'uses' => 'UsersController@profile'
    ]);

    Route::get('user/add_address', [
        'as' => 'user.add_address',
        'uses' => 'UsersController@add_address_form'
    ]);
    Route::post('user/add_address', [
        'as' => 'user.add_address.store',
        'uses' => 'UsersController@add_address_store'
    ]);
});








