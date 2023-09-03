<?php
/**
 * Created by PhpStorm.
 * User: kamiyar
 * Date: 1/2/2017
 * Time: 9:32 PM
 */

Validator::extend('alpha_spaces', function($attribute, $value)
{
    return preg_match('/^[\pL\s]+$/u', $value);
});