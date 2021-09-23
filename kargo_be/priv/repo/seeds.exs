# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     KargoBe.Repo.insert!(%KargoBe.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias KargoBe.Repo
alias KargoBe.Unit.TruckType
alias KargoBe.Unit.Truck
alias KargoBe.Drivers.Driver

# Drivers
Repo.insert!(%Driver{
  name: "John Doe",
  phone_number: "081010001000",
  status: true,
  created_at: NaiveDateTime.local_now()
})

Repo.insert!(%Driver{
  name: "Jane Doe",
  phone_number: "081010001001",
  status: false,
  created_at: NaiveDateTime.local_now()
})

Repo.insert!(%Driver{
  name: "Jack Doe",
  phone_number: "081010001002",
  status: true,
  created_at: NaiveDateTime.local_now()
})

# Truck Types
Repo.insert!(%TruckType{
  name: "FUSO"
});
Repo.insert!(%TruckType{
  name: "PICKUP"
});
Repo.insert!(%TruckType{
  name: "TRONTON"
});
Repo.insert!(%TruckType{
  name: "VAN"
});

# Trucks
Repo.insert!(%Truck{
  license_number: "AB2275TF",
  license_type: "yellow",
  production_year: 2007,
  status: true,
  stnk_path: "",
  kir_path: "",
  truck_type: 2
})
Repo.insert!(%Truck{
  license_number: "AB706JA",
  license_type: "yellow",
  production_year: 2010,
  status: true,
  stnk_path: "",
  kir_path: "",
  truck_type: 3
})
Repo.insert!(%Truck{
  license_number: "AB1454JA",
  license_type: "yellow",
  production_year: 2005,
  status: true,
  stnk_path: "",
  kir_path: "",
  truck_type: 4
})
Repo.insert!(%Truck{
  license_number: "AB1680OS",
  license_type: "yellow",
  production_year: 2001,
  status: false,
  stnk_path: "",
  kir_path: "",
  truck_type: 1
})
