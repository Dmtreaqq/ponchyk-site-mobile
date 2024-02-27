<?php session_start();
            // НАСТРОЙКИ ЛЕНДИНГА

            $country = "UA"; // Страна
            $offer_id = 0000; // ID оффера        
            $products = 0000; // ID субоффера
            $price = 799; // Цена
            $currency = "грн."; // Валюта
            $sale = 50; // Скидка (%)
            
            // НАСТРОЙКИ SEO
            $meta["meta_t"] = ""; // META title
            $meta["meta_d"] = ""; // META description
            $meta["meta_h1"] = ""; // H1
            


            // !!! КОД НИЖЕ - НЕ МЕНЯТЬ !!!
            $uid = "";
            $addit = "";
            $office = "";
            $deliv = "";
            $pay = "";
            $landing_price = $price;
            $price_new = $landing_price;
            $price_old = 1599;
            // $price_old = floor(($landing_price / (100 - $sale)) * 100); // Старая цена
            $product_id = $products;
            

        