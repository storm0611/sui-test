#[test_only]
module contract::contract_tests {
    
    use contract::my_module;

    #[test]
    fun test_contract() {
        assert!(my_module::test(b"Hello World".to_string()) == b"Hello World".to_string(), 0);
    }    
}
