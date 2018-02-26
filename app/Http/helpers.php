<?php

function inspect($data)
{
    ob_start();
    print_r($data);
    error_log(ob_get_clean(), 4);
}
