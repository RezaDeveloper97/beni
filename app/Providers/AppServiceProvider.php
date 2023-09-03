<?php

namespace App\Providers;

use Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(){
        /**
         * Usage: showSetting($settingName,$html)
         * return setting data
         */
        Blade::directive('showSetting', function($setting) {
           
            $array = $this->getArguments($setting);
            if(!isset($array[1])) {
                $array[1] = true; /// this is just for this function for default val;
                //dd($array);
            }
            list($settingName, $html) = $array;
            return "<?php echo \\App\\Kamiyar\\KamiyarFunctions::showSetting('{$settingName}',{$html}); ?>";
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if($this->app->environment() == 'local') {
            $this->app->register('\Laracademy\Generators\GeneratorsServiceProvider');
        }
    }

    /**
     * Get argument array from argument string.
     *
     * @param string $argumentString
     *
     * @return array
     */
    private function getArguments($argumentString)
    {
        return array_map('trim',explode(',', str_replace(['(', ')'], '', $argumentString)));
    }
}
