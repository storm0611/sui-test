module contract::my_module {

    // Imports the `String` type from the Standard Library
    use std::string::String;
    use sui::event;

    public struct LogEvent has copy, drop {
         text: String 
    }

    public fun test(_str: String): String {
        event::emit(LogEvent {
            text: _str,
        });
        return _str
    }
}