package models

type Address struct {
    Country        string
    Province       string
    City           string
    District       string
    Street         string
    StreetNumber   string
    Building       string
    BuildingNumber string
    Detail         string
    Phone          []string
}
