package com.group39.fitbot.group39_fitbot.controller;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordHashingController {
    public void passwordHashing() {
    }

    public static byte[] obtainSHA(String s) throws NoSuchAlgorithmException {
        // Static getInstance() method is invoked with the hashing SHA-256
        MessageDigest msgDigest = MessageDigest.getInstance("SHA-256");

        // the digest() method is invoked
        // to compute the message digest of the input
        // and returns an array of byte
        return msgDigest.digest(s.getBytes(StandardCharsets.UTF_8));
    }
    public static String toHexStr(byte[] hash) {
        // Converting the byte array in the signum representation
        BigInteger no = new BigInteger(1, hash);

        // Converting the message digest into the hex value
        StringBuilder hexStr = new StringBuilder(no.toString(16));

        // Padding with tbe leading zeros
        while (hexStr.length() < 32)
        {
            hexStr.insert(0, '0');
        }

        return hexStr.toString();
    }
}
