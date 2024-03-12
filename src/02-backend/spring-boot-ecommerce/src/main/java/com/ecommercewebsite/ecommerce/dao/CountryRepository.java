package com.ecommercewebsite.ecommerce.dao;


import com.ecommercewebsite.ecommerce.entity.Country;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "countries", path = "countries")
public interface CountryRepository extends JpaRepository<Country, Integer> {
}
