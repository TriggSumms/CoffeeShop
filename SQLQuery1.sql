 SELECT c.Id AS CoffeezId, c.Title, c.BeanVarietyId AS CoffeeBeanzVarietyId,
                                                b.Id AS BeanVarietiesId, b.Name, b.Region, b.Notes
                                          FROM Coffee c
                                          JOIN BeanVariety b ON c.BeanVarietyId = b.Id